export default () => {
  return (
    <svg width='48' height='80' xmlns='http://www.w3.org/2000/svg'>
      <g
        transform='translate(3 1)'
        stroke='#3232C8'
        strokeWidth='2'
        fill='none'
        fillRule='evenodd'
      >
        <circle cx='21' cy='16' r='16' />
        <path d='M42 38L21 59 0 38z' />
      </g>
      <style jsx>
        {`
            circle {
              animation: squish 3s infinite;
            }
            path {
              animation: bounce 3s infinite;
            }
            @keyframes squish {
              0% {
                transform: scaleY(1);
              }
              10% {
                transform: scaleY(0.9);
              }
              12% {
                transform: scaleY(1.1);
              }
              15% {
                transform: scaleY(1);
              }
              100% {
                transform: scaleY(1);
              }
            }
            @keyframes bounce {
              0% {
                transform: translateY(0px);
              }
              10% {
                transform: translateY(0px);
              }
              12% {
                transform: translateY(3px);
              }
              17% {
                transform: translateY(7px);
              }
              30% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(0px);
              }
            }
          `}
      </style>
    </svg>
  )
}
