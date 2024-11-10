interface Props {
  phoneNumber: string;
}

const PhoneCall = ({ phoneNumber }: Props) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="PhoneCall"
      style={{ display: "inline-block" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-phone hover:text-blue-500 hover:scale-110"
        style={{
          cursor: "pointer",
        }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </svg>
    </a>
  );
};

export default PhoneCall;