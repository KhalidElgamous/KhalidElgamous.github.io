import Icon from "./Icon";

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="icon-wrapper">
      <Icon name={icon} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
