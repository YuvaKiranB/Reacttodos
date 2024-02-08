// Write your code here
import './index.css'

const GetListItem = props => {
  const {clickDelete, listContent} = props
  const {id, title} = listContent

  const deleteItem = () => {
    clickDelete(id)
  }

  return (
    <li className="li">
      <p className="p1">{title}</p>
      <button type="button" onClick={deleteItem} className="button">
        Delete
      </button>
    </li>
  )
}

export default GetListItem
