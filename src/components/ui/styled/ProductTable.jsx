import styled from "styled-components";

const TableRow = styled.div`
    margin-top: 1rem;
    .Item{
        margin-right: .8rem;
    }
`

const Wrapper = styled.div`
    display: flex;
`
const ProductTable = ({name, units, price}) => {

    const revenue = units * price;
    

    return(
        <Wrapper>
            <TableRow>
                <TableRow.Item>
                    {name}
                </TableRow.Item>
                <TableRow.Item>
                    {revenue}
                </TableRow.Item>
                
            </TableRow>
        </Wrapper>
    )
}

export default ProductTable;