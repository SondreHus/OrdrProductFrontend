import "./MenuAndHighlight.css"

import { Input, IconButton, InputAdornment} from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import {useState, useEffect} from "react";

// Main component which contains the searchbar, list of menu items, and description highlight
const Menu  = (props) => {

    const productList = props.productList;
    const [searchProducts, setSearchProducts] = useState(productList);
    const [selectedProduct, setSelected] = useState(productList[0]);

    // Updates the seachProducts array with items that have (search) in its name
    const UpdateSearchProducts = (search) => {
        setSearchProducts(productList.filter((x) => x.name.toLowerCase().search(search.toLowerCase()) >= 0));
    }
  
    return(
        <div>
            <Input data-testid="SearchBar" inputProps={{style: {fontSize: 40, color: "white"}}} onChange ={(e) => UpdateSearchProducts(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
            } placeholder="Search"></Input>
            <div className="Menu-And-Description">
                <DetailCard product={selectedProduct}></DetailCard>
                <ProductList list={searchProducts} setSelected={setSelected}></ProductList>
            </div>
        </div>
    )
}

// List of products with page selection
// Automatically divides a given list of products into pages of 8 items
// Updates selected item if a list item is clicked
const ProductList = (props) => {

    const [page, setPage] = useState(0)

    function ResetPage(){
        setPage(0);
    }
    // Resets page when list is updated
    useEffect(ResetPage, [props.list])

    return(
        <div className="Menu"> 
            <div className="Page">
            {
            // Creates the 8 list items for the page
            props.list.slice(page*8, Math.min(page*8 + 8, props.list.length))
                .map((object, i) => <ListItem key={i} product={object} setSelected={(e) =>{
                    props.setSelected(object);
                }} />)}
            </div>
            <IconButton onClick={(e) => {
                    if(page > 0){
                        setPage(page-1);
                    }
                }
            }>
                <ArrowBackIosIcon />
            </IconButton>
            
            {page + 1}
            
            <IconButton onClick={(e) => {
                if(page + 1 < props.list.length/8)
                    setPage(page+1)
                }
            }>
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
        
    );
}
// Displays name and price of a given priduct
const ListItem = (props) => {
    return(
        <div className="List-Card" onClick={props.setSelected}>
            <div className="List-Content">
                <div className="List-Card-Name" data-testid="ListItemName">{props.product.name}</div>
                <div className="List-Card-Price">{props.product.variants[0].price} {props.product.variants[0].currency}</div>
            </div>
            <hr></hr>
        </div>
    )
}
// Displays name, description, image and price of a given product
const DetailCard = (props) => {
    return(
        <div className="Highlight">
            <div>
                <h3 data-testid="HighlightName">{props.product.name}</h3>
                <p>{props.product.description}</p>
            </div>
            <img src={props.product.image} alt={props.product.name} className="Tasty-Image"></img>
            <h3>{props.product.variants[0].price} {props.product.variants[0].currency}</h3>
        </div>
    ) 
}
export default Menu;