import React from 'react'
import { DataTable, TableHeader, Button} from 'react-mdl';

const AddToCart = () => {
        return (
          <div>
              <h5>Shopping Bag</h5>

              <Button raised colored align="left">Proceed to Checkout</Button>

              <DataTable style={{minWidth: '80%', margin: 'auto'}}
                shadow={0}
                rows={[
                    {
                      id: 1001, 
                      item: 'Panash Pink Saree', 
                      quantity: 2, 
                      price: 222.90, 
                      removeItem: 'Delete'
                    },
                    {id: 1002, item: 'Kurta', quantity: 5, price: 124.25, removeItem: 'Delete'},
                    {id: 1003, item: 'Kids Kurta (Gold on Blue)', quantity: 1, price: 24.35, removeItem: 'Delete'}
                ]}
              >
                <TableHeader name="url" tooltip="Image">Product Image</TableHeader>

                <TableHeader name="item" tooltip="The amazing material name">Product</TableHeader>
                <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                <TableHeader numeric name="removeItem" tooltip="Remove from bag">Remove</TableHeader>
            </DataTable>
<br/>
            <DataTable style={{minWidth: '80%', margin: 'auto'}}
                shadow={0}
                rows={[
                    {
                      id: 1001, 
                      item: 'Womens Kurta', 
                      quantity: 25, 
                      price: 2.90
                    }
                ]}
              >
              <TableHeader name="total" tooltip="Check your total">TOTAL</TableHeader>
 
            </DataTable>
          </div>
    )
  }

export default AddToCart;