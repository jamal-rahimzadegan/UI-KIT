type Props =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      as?: 'button'
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: 'a'
    })

// Note: Update the variant as your needs

export default function Button(props: Props) {
  if (props.as === 'a') return <a {...props} />
  return <button {...props} />
}
