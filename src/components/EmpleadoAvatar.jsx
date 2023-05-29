import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({avatar}) => {
  return (
    <>
      <Image
        src={avatar}
        fluid="true"
      ></Image>
    </>
  );
};

export default EmpleadoAvatar;
