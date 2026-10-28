// Thin wrapper around the Font Awesome <i> tag. Pass the icon name from the JSON, e.g. "fa-arrow-right".
const Icon = ({ name }) => <i className={`fas ${name}`} aria-hidden="true"></i>;

export default Icon;
