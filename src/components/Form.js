import React from 'react'

const Form = () => {
  return (
    <div>
      

      <br></br>

      <strong>Sign up to keep in contact</strong>



      <form>
        <label>
          Name:
          <input type="text" name=" name" />
        </label>

        <br></br>

        <label>
          Email:
          <input type="text" email=" email" />
        </label>

        <br></br>

        <label>
          Your github or link:
          <input type="text" name=" name" />
        </label>

        <br></br>

        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default Form;