import React, { useContext, useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { emphasize, styled } from '@mui/material/styles';
import { Breadcrumbs, Chip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { MyContext } from '../../App';

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    'backgroundColor': 'transparent',
    'chartArea': { 'width': '100%', 'height': '100%' },
};

const ProductList = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0, 0);

    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    })

    return (
        <>
            <div className='right-content w-100'>
                
                    <div className='card shadow border-0 w-100 flex-row p-4'>
                        <h5 className='mb-0'>Product View</h5>
                        <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
                            <StyledBreadcrumb
                                component='a'
                                href="#"
                                label='Dashboard'
                                icon={<HomeIcon fontSize='small' />}
                            />

                            <StyledBreadcrumb
                                label='products'
                                component='a'
                                href="#"
                                deleteIcon={<ExpandMoreIcon />}
                            />

                        </Breadcrumbs>
                    </div>

                    <div className='card shadow border-0 p-3 mt-4'>
                    <h3 className='hd'>Best Selling Products</h3>

                    <div className='row cardFilters mt-3'>
                        <div className='col md-3'>
                            <h4>SHOW BY</h4>
                            <Select
                                value={showBy}
                                onChange={(e) => setShowBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                labelId='demo-select-small-label'
                                className='w-100'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div className='col md-3'>
                            <h4>CATEGORY BY</h4>
                            <Select
                                value={categoryBy}
                                onChange={(e) => setCategoryBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                labelId='demo-select-small-label'
                                className='w-100'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div className='col md-3'>
                            <h4>BRAND BY</h4>
                            <Select
                                value={brandBy}
                                onChange={(e) => setBrandBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                labelId='demo-select-small-label'
                                className='w-100'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div className='col md-3'>
                            <h4>SEARCH BY</h4>
                            <Select
                                value={searchBy}
                                onChange={(e) => setSearchBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                labelId='demo-select-small-label'
                                className='w-100'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className='table-responsive mt-3'>
                        <table className='table table-bordered v-align'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '300px' }}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className='d-flex align-items-center productBox'>
                                            <div className='imgWrapper'>
                                                <div className='img'>
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                                                </div>
                                            </div>
                                            <div className='info pl-0'>
                                                <h6>Tops and Skirts set for Female...</h6>
                                                <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            <del className='old'>$21.00</del>
                                            <span className='new text-danger text-danger'>$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className='actions d-flex align-items-center'>
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div className='d-flex tableFooter'>
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination className="pagination" count={10} color="primary"
                                showFirstButton showLastButton />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;


