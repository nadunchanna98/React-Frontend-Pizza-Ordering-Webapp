import React, { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import '../../App.css';

const Filter = ({ handleSort, handleInStock, handleDelivery , handlePizzaType }) => {
    
    const [sortAsc, setSortAsc] = useState(true);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [delivery, setDelivery] = useState(null);
    const [pizzaType , setPizzaType] = useState(null);



    const handleSortClick = (isAsc) => {
        setSortAsc(isAsc);
        handleSort(isAsc);
    };

    const handleInStockChange = (e) => {
        const checked = e.target.checked;
        setInStockOnly(checked);
        handleInStock(checked);
    };

    const handleDeliveryClick = (isDelivery) => {
        setDelivery(isDelivery);
        handleDelivery(isDelivery);
    };

    const handlePizzaTypeClick = (isPizzaType) => {
        setPizzaType(isPizzaType);
        handlePizzaType(isPizzaType);
    };

    const handleClearFilter = () => {
        setSortAsc(true);
        setInStockOnly(false);
        setDelivery(null);
        handleSort(true);
        handleInStock(false);
        handleDelivery(null);
        handlePizzaType(null);
    };

    return (
        <div className="filter-container">


            <span>
                <Form.Group className="form-container" >


                    <Form.Label>Sort By:</Form.Label>
                    <ButtonGroup className="mr-2">
                        <Button
                            variant={sortAsc ? 'primary' : 'secondary'}
                            onClick={() => handleSortClick(true)}
                        >
                            Ascending
                        </Button>
                        <Button
                            variant={!sortAsc ? 'primary' : 'secondary'}
                            onClick={() => handleSortClick(false)}
                        >
                            Descending
                        </Button>
                    </ButtonGroup>
                </Form.Group>
            </span>

       
            <span>
            <Form.Group>
                <Form.Label>Type:</Form.Label>
                <ButtonGroup className="mr-2">
                    <Button
                        variant={pizzaType === true ? 'primary' : 'secondary'}
                        onClick={() => handlePizzaTypeClick(true)}
                    >
                        PanPizza
                    </Button>
                    <Button
                        variant={pizzaType === false ? 'primary' : 'secondary'}
                        onClick={() => handlePizzaTypeClick(false)}
                    >
                        ThinCrust
                    </Button>
                </ButtonGroup>
            </Form.Group>
            </span>

            <span>
            <Form.Group>
                <Form.Label>Delivery:</Form.Label>
                <ButtonGroup className="mr-2">
                    <Button
                        variant={delivery === true ? 'primary' : 'secondary'}
                        onClick={() => handleDeliveryClick(true)}
                    >
                        Delivery
                    </Button>
                    <Button
                        variant={delivery === false ? 'primary' : 'secondary'}
                        onClick={() => handleDeliveryClick(false)}
                    >
                        NonDelivery
                    </Button>
                </ButtonGroup>
            </Form.Group>
            </span>

            {/* <span>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    label="Include Out of Stock"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />
            </Form.Group>
            </span> */}
   
            <span>
            <Button variant="secondary" onClick={handleClearFilter}>
                Clear Filter
            </Button>
            </span>
        </div>
    );
};

export default Filter;
