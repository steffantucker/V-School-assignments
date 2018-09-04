import React from "react";

const Form = props => {
  const style = {
		container: {
			padding: 0,
			margin: 30,
			border: '1px solid black',
			borderRadius: '10px'
		},
		header: {
			background: 'black',
			color: 'white',
			borderRadius: '10px 10px 0 0'
		},
    form: {
      display: "grid",
      gridTemplate: "repeat(3, 20px) 40px / 1fr 1fr",
      gridGap: "10px 30px",
      padding: 30,
    },
    textBox: {
      gridColumn: "1 / span 2"
    },
    button: {
      gridColumn: "1 / span 2",
      width: 100,
      justifySelf: "center"
    }
  };
  return (
		<div style={style.container}>
			<div style={style.header}>New Badge</div>
	    <form onSubmit={props.handlesubmit} style={style.form}>
	      <input
	        onChange={props.handlechange}
	        value={props.values.fName}
	        type="text"
					name="fName"
					placeholder='First Name'
	        required
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.lName}
	        type="text"
					name="lName"
					placeholder='Last Name'
	        required
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.email}
	        type="text"
					name="email"
					placeholder='Email'
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.pob}
	        type="text"
					name="pob"
					placeholder='Place of Birth'
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.phone}
	        type="number"
					name="phone"
					placeholder='Phone number'
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.food}
	        type="text"
					name="food"
					placeholder='Favorite Food'
	      />
	      <input
	        onChange={props.handlechange}
	        value={props.values.custom}
	        type="textarea"
					name="custom"
					placeholder='Tell us more'
	        style={style.textBox}
	      />
	      <button style={style.button}>Submit</button>
	    </form>
		</div>
  );
};

export default Form;
