interface AvatarProps {
  src?: string;
  alt?: string;
  onClick?: () => void;
}

const Avatar = ({ src, alt, ...props }: AvatarProps) => {
  return (
    <>
      <img className="rounded-full  w-20 h-20" src={src} {...props} />
    </>
  );
};
export default Avatar;
