const OptionItem = props => {
  const {optionItem} = props
  const {id, capitalDisplayText} = optionItem

  return <option value={id}>{capitalDisplayText}</option>
}

export default OptionItem
