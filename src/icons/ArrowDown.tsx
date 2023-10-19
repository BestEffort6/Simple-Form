import { SVGProps } from "react";

const Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80586 9.28013C4.3981 8.87238 4.39805 8.21484 4.80569 7.80702C5.2056 7.39899 5.87133 7.39905 6.27119 7.79891L11.9961 13.5238L17.7209 7.80686C18.1287 7.39905 18.7863 7.39905 19.1941 7.80686C19.602 8.21466 19.602 8.87232 19.1941 9.28013L12.5937 15.8806C12.2653 16.209 11.7347 16.209 11.4063 15.8806L4.80586 9.28013Z"
        fill="#817CA5"
      />
    </svg>
  );
};

export default Icon;
