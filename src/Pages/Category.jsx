import { useParams} from "react-router-dom"

function Category() {
  const {name} = useParams()
  console.log("name",name)
  return <div>Category</div>;
}

export default Category;
