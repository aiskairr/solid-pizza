
function CreateNewElement() {
  return (
    <div className="container page">
        <h1 className="text-center">Create new Element</h1>
        <form>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Image" />
            <textarea placeholder="Description"></textarea>
            <input type="radio" />
            <input type="radio" />
            <button className="btn">Create</button>
        </form>
    </div>
  )
}

export default CreateNewElement;