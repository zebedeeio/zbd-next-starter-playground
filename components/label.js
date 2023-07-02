export const Label = ({ label, hasMarginTop }) => (
  <p style={{
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '-10px',
    marginTop: hasMarginTop ? '20px' : 0,
  }}>
    {label}
  </p>
)