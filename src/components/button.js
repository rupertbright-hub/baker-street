import React from 'react'



function Button(props) {
    return (
    <div>
        <div className="btn-container">
	<button>
		<span className="text">Send information</span>
		<div className="icon-container">
			<div onClick={props.toggle} className="icon icon--left">
				<svg>
					<use href="#arrow-right"></use>
				</svg>
			</div>
			<div className="icon icon--right">
				<svg>
					<use href="#arrow-right"></use>
				</svg>
			</div>
		</div>
	</button>
</div>
<svg style={{display:'none'}}>
	<symbol id="arrow-right" viewBox="0 0 20 10">
		<path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
	</symbol>
</svg>

            
    </div>
)
}

export default Button
