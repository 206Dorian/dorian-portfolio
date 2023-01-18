import React from 'react'

const Form = () => {
  return (
    <>

      <strong>Sign up to keep in contact with me</strong>



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
          Whatever:
          <input type="text" name=" name" />
        </label>

        <br></br>

        <input type="submit" value="Submit" />
      </form>
    



    </>
  )
}

export default Form;