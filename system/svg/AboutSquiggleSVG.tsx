export default function AboutSquiggleSVG(props) {
  return (
    <svg {...props} className={props.className} width={props.width || '76'} height={props.height || '12'} viewBox="0 0 76 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.7902 7.5277C44.1722 6.4043 45.8412 5.70127 53.4773 2.60367C56.2357 1.48475 58.5771 0.559986 58.6806 0.548523C58.9539 0.518253 59.2985 0.910705 59.2985 1.25227C59.2985 1.41437 59.1373 1.69289 58.9403 1.8711C58.7433 2.04932 58.5817 2.28361 58.5812 2.39143C58.5807 2.49926 57.9668 3.27267 57.2172 4.11003C56.0129 5.45535 54.6984 7.15496 54.8622 7.15496C54.8947 7.15496 55.6038 6.86694 56.4381 6.51499C60.9253 4.62229 67.4923 2.55603 73.4057 1.17632C75.2653 0.742325 75.892 0.811113 74.8743 1.33735C73.6987 1.94526 67.416 4.33016 62.7017 5.95794C59.9926 6.89346 57.0709 7.90813 56.2092 8.2128C54.4779 8.82519 53.7229 8.9022 53.3898 8.50063C52.928 7.9443 53.7654 6.24935 55.5543 4.11862C56.1641 3.39249 56.5508 2.84369 56.4136 2.89904C56.2764 2.95457 54.3505 3.73944 52.134 4.64361C42.2168 8.68853 38.6182 10.0566 38.3451 9.88572C37.7429 9.50922 37.9493 8.88376 39.4158 6.64125C40.2118 5.42418 40.8727 4.37691 40.8844 4.31404C40.8962 4.25117 40.8312 4.01904 40.7402 3.79837L40.5745 3.39698L37.3537 4.4833C33.6303 5.73906 29.5268 7.34409 25.75 9.02203C22.9501 10.2658 22.1439 10.4422 21.9566 9.85187C21.802 9.36469 22.321 8.43221 23.9008 6.35933C24.6472 5.37994 25.2304 4.55101 25.1965 4.51734C24.9929 4.31369 17.0347 7.49492 12.5499 9.57282C8.01918 11.6719 7.17448 12.0149 6.67762 11.9574C6.41182 11.9265 6.17055 11.7756 6.14135 11.6217C6.11233 11.4677 6.59523 10.4585 7.2146 9.37884C8.54148 7.06594 9.06878 5.94271 8.90471 5.77846C8.75193 5.62568 7.27281 6.2386 3.62641 7.96598C1.59831 8.92674 0.64596 9.29358 0.516461 9.16408C0.41365 9.06127 0.385533 8.88698 0.453776 8.77647C0.522197 8.66596 1.84101 7.9452 3.38461 7.17483C7.94377 4.89919 9.33209 4.45517 9.86782 5.10088C10.2576 5.57034 9.71628 6.9454 7.95577 9.95827L7.52143 10.7019L10.4387 9.23285C12.0432 8.42487 14.3634 7.33658 15.5948 6.81446C17.7914 5.88289 26.0862 3.03534 26.6033 3.03534C27.0145 3.03534 27.2866 3.68283 27.0563 4.11324C26.8949 4.41505 24.4335 7.55027 23.5055 8.63623C23.3565 8.81051 24.4778 8.35269 25.9972 7.61868C29.3695 5.98946 32.4985 4.73352 36.2824 3.49047C39.8889 2.30564 42.1771 1.70273 42.5391 1.84154C42.8493 1.96065 42.9241 2.77079 42.641 2.94579C42.5424 3.00669 42.4618 3.31672 42.4618 3.63465C42.4618 4.06452 42.0943 4.74659 41.0289 6.29396C40.2408 7.43867 39.596 8.41734 39.596 8.46875C39.596 8.52016 40.5835 8.09675 41.7902 7.5277Z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  );
}