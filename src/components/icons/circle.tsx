interface CircleProps {
  opacity?: boolean
}

export function Circle({ opacity }: CircleProps) {
  if (opacity) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle opacity="0.2" cx="6" cy="6" r="6" fill="#0D3B66" />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#0D3B66" />
    </svg>
  )
}
