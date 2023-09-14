/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 mb-2 text-sm font-bold">
      {children}
    </label>
  )
}

export default Label