import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"
import bezitim from "../assets/beztam.png"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Let's track <span className="accent">Your Money</span>
        </h1>
        <p>
          Let's manage your financial expenses and duties
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={bezitim} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro