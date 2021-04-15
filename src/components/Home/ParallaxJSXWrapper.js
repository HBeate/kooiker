import React, {Fragment} from 'react';

function ParallaxJSXWrapper (JSXElement, weight){
    return class extends React.Component{
        constructor(props){
            super(props);

            this.state={
                start_position: 0,
                ease: 0.05,
                WrappedJSXElement: <Fragment></Fragment>
            }
        }

        componentDidMount(){
            this.last_offset = 0;
            this.animation_runing = false;
            this.wrappedJSXElement = 0;

            const ref = React.createRef();

            const JSXElementWithRef = React.cloneElement(
                JSXElement,
                {...JSXElement.props, ref: ref}
            )
                console.log(ref)
            this.setState({
                ease: weight,
                WrappedJSXElement: JSXElementWithRef
            }, () => {
                this.setState({start_position: ref.current.offsetTop}, () => {
                    console.log(ref)
                    this.wrappedJSXElement = ref;
                    document.addEventListener('scroll', this.animate_scroll);
                });
            });
                
        }

        animate_scroll = () =>{
            if (!this.animation_runing){
                this.animation_runing = true;
                requestAnimationFrame(this.animation_loop);
            }
        }

        animation_loop = () =>{
            let current_offset = window.pageYOffset;
            let difference = current_offset - this.last_offset;
            difference *= this.state.ease;

            if(Math.abs(difference) < 0.05) {
                this.last_offset = current_offset;
                this.animation_runing = false;
                return;
            }
            
            this.wrappedJSXElement.current.style.top = `${this.state.start_position - this.last_offset}px`;
            this.last_offset += difference;

            requestAnimationFrame(this.animation_loop);
        }
        render(){
            return(
                <Fragment>
                    {this.state.WrappedJSXElement}
                </Fragment>
            )
        }
    }
}

export default ParallaxJSXWrapper;
