import Image from "next/image";

const Picture = () => (
    <Image
        src="/images/profile.png"
        alt="Hamuel Agulto"
        height={144} // Desired size with correct aspect ratio
        width={144}
    />
)

export default Picture