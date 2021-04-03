import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Menu  from './MenuAndHighlight';
import products from "../data/products.json";



test( "Should limit list to fit search", ()=>{

    render(<Menu productList={products} data-testid="menu_test_id"></Menu>);
    // Makes user search for the last item
    userEvent.type(screen.getByTestId("SearchBar"), products[products.length-1].name);
    // Excpects the last item to be the first in the list
    expect(screen.getAllByTestId("ListItemName")[0]).toHaveTextContent(products[products.length-1].name);
})

test( "Should change highlighted element when list is clicked", ()=>{

    render(<Menu productList={products} data-testid="menu_test_id"></Menu>);
    
    // The default highlighted product is always the first
    expect(screen.getByTestId("HighlightName")).toHaveTextContent(products[0].name);
    // Clicks second product
    screen.getByText(products[1].name).click();
    // It should have changed to highlight the second one
    expect(screen.getByTestId("HighlightName")).toHaveTextContent(products[1].name);
})





