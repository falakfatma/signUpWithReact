export default function Image({src, alt}) {
  return (
    <img
      src={src}
      alt={alt}
      className="form_image"
    />
  );
}