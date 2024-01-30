export default function ArrowRightSVG(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-reactroot="">
        <path {...props} strokeLinejoin="round" stroke-linecap="round" strokeWidth="1.5" stroke={props.stroke ? props.stroke : 'var(--color-black)'} d="M15 6L21 12L15 18" />
        <path {...props} strokeLinejoin="round" stroke-linecap="round" strokeWidth="1.5" stroke={props.stroke ? props.stroke : 'var(--color-black'} d="M21 12H3" />
      </svg>
    );
  }