export default function Footer({ setShowHelp }) {
  return (
    <footer>
      <div
        className="needHelp"
        onClick={() => {
          setShowHelp(true)
        }}
      >
        Need help?
      </div>
    </footer>
  )
}
