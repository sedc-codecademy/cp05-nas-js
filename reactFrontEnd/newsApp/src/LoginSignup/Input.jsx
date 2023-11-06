export default function Input() {
  return (
    <div className="my-5 mt-64">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type='email'
        name="email"
        required
        //  className={fixedInputClass + customClass}
        placeholder='email'
      />
    </div>
  )
}
