import React, { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import { Breadcrumbs, Chip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, Select } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { IoCloseSharp } from 'react-icons/io5';
import { FaCloudUploadAlt, FaRegImages } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Category } from '@mui/icons-material';

const ProductUpload = () => {

    const [categoryVal, setCategoryVal] = useState("");
    const [subCatVal, setSubCatVal] = useState("");
    const [productRAMS, setProductRAMS] = useState("");
    const [ratingValue, setRatingValue] = useState(1);

    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
        // setFormFields(() => ({
        //     ...formFields,
        //     category: event.target.value
        // }))
    }

    const handleChangeSubCategory = (event) => {
        setCategoryVal(event.target.value);
        // setFormFields(() => ({
        //     ...formFields,
        //     category: event.target.value
        // }))
    }

    const handleChangeProductRams = (event) => {
        const {
            target: { value },
        } = event;
        setProductRAMS(typeof value === 'string' ? value.split(',') : value);
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

                <div className='card shadow border-0 w-100 flex-row p-4 res-col'>
                    <h5 className='mb-0'>Product Upload</h5>
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

                        <StyledBreadcrumb
                            label='product Upload'
                        />
                    </Breadcrumbs>
                </div>

                <form className='form'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='card p-4 mt-0'>
                                <h5 className='mb-4'>Basic Information</h5>

                                <div className='form-group'>
                                    <h6>PRODUCT NAME</h6>
                                    <input type="text" name="name" />
                                </div>

                                <div className='form-group'>
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10} />
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>CATEGORY</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>

                                                <MenuItem className='text-capitalize' value="Men">Men</MenuItem>

                                                <MenuItem className='text-capitalize' value="Women">Women</MenuItem>

                                                <MenuItem className='text-capitalize' value="Kids">Kids</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>SUB CATEGORY</h6>
                                            <Select
                                                value={subCatVal}
                                                onChange={handleChangeSubCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>

                                                <MenuItem className='text-capitalize' value="Jeans">Jeans</MenuItem>

                                                <MenuItem className='text-capitalize' value="Shirts">Shirts</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>REGULAR PRICE</h6>
                                            <input type="text" placeholder='type here' />
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>OLD PRICE</h6>
                                            <input type="text" placeholder='type here' />
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>IS FEATURED</h6>
                                            <Select
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>

                                                <MenuItem className='text-capitalize'>True</MenuItem>

                                                <MenuItem className='text-capitalize'>False</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>PRODUCT STOCK</h6>
                                            <input type="text" placeholder='type here' />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>BRAND</h6>
                                            <input type="text" placeholder='type here' />
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>DISCOUNT</h6>
                                            <input type="text" placeholder='type here' />
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>PRODUCT RAMS</h6>
                                            <Select
                                                value={productRAMS}
                                                // multiple
                                                onChange={handleChangeProductRams}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>

                                                <MenuItem className='text-capitalize' value="4GB">4GB</MenuItem>

                                                <MenuItem className='text-capitalize' value="8GB">8GB</MenuItem>

                                                <MenuItem className='text-capitalize' value="10GB">10GB</MenuItem>

                                                <MenuItem className='text-capitalize' value="12GB">12GB</MenuItem>

                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>RATINGS</h6>
                                            <Rating
                                                name="simple-controlled"
                                                value={ratingValue}
                                                onChange={(event, newValue) => {
                                                    setRatingValue(newValue);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* 
                                    <br />

                                    <Button className="btn-blue btn-lg btn-big"><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button> */}
                                </div>
                            </div>


                            <div classname='card p-4 mt-0'>
                                <div className='imageUploadSec'>
                                    <h5 className='mb-4'>Media And Published</h5>

                                    <div className='imgUploadBox d-flex align-items-center'>

                                        <div className='uploadBox'>
                                            <span className='remove'><IoCloseSharp /></span>

                                            <div className='box'>
                                                <LazyLoadImage alt={"image"}
                                                    effect="blur"
                                                    className="w-100"
                                                    src={'https://mironcoder-hotash.netlify.app/images/product/single/01.webp'} />
                                            </div>
                                        </div>

                                        <div className='uploadBox'>
                                            <input type="file" multiple name="images" />
                                            <div className='info'>
                                                <FaRegImages />
                                                <h5>Image Upload</h5>
                                            </div>

                                        </div>
                                    </div>

                                    <br />

                                    <Button type="button" className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default ProductUpload
