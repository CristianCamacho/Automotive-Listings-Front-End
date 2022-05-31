import React, { useState, useEffect } from 'react'
import { Input, Select, Button } from "@supabase/ui"

export default function VehicleListingCreate(props) {
    const [years, setYears] = useState([])
    const [makes, setMakes] = useState([])
    const [models, setModels] = useState([])
    const [options, setOptions] = useState([])

    const [selYear, setYear] = useState('')
    const [selMake, setMake] = useState('')
    const [selModel, setModel] = useState('')
    const [selOption, setOption] = useState('')

    const [selLien, setLien] = useState()
    const [mileage, setMileage] = useState()
    const [vin, setVin] = useState()
    const [price, setPrice] = useState()
    const [location, setLocation] = useState()

    function handleMileage(event) {
        setMileage(event.target.value)
    }

    function handleVin(event) {
        setVin(event.target.value)
    }

    function handlePrice(event) {
        setPrice(event.target.value)
    }

    function handleLien(event) {
        setLien(event.target.value)
    }

    function handleLocatoin(event) {
        setLocation(event.target.value)
    }

    function handleChangeAndSelection(event) {
        if (event.target.id === 'selYear') {
            setMakes([])
            setModels([])
            setOptions([])
            setMake('')
            setModel('')
            setOption('')
        } else if (event.target.id === 'selMake') {
            setModels([])
            setOptions([])
            setModel('')
            setOption('')
        } else if (event.target.id === 'selModel') {
            setOptions([])
            setOption('')
        }

        switch (event.target.id) {
            case 'selYear':
                setYear(event.target.value)
                break;
            case 'selMake':
                setMake(event.target.value)
                break;
            case 'selModel':
                setModel(event.target.value)
                break;
            case 'selOption':
                if (event.target.selectedIndex > 0) {
                    setOption(options[event.target.selectedIndex - 1])
                }
                break;
        }
    }

    function formSubmit(event) {
        event.preventDefault()

        console.log(selYear, selMake, selModel, selOption)
        fetch(props.BACKEND + '/api/v1/listings/create_listing', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                govid: selOption.id,
                lien: selLien,
                mileage: mileage,
                vin: vin,
                zipcode: location,
                price: price
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    useEffect(() => {
        if (years.length < 1) {
            fetch(props.BACKEND + '/api/v1/auto_info/get_years')
                .then(res => {
                    return res.json()
                }).then(data => {
                    setYears(data.years)
                })
        }
    }, [])

    useEffect(() => {
        if (selYear) {
            if (makes.length < 1) {
                fetch(props.BACKEND + '/api/v1/auto_info/get_makes?year=' + selYear)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        setMakes(data.makes)
                    })
            } else if (selMake && models.length < 1) {
                fetch(props.BACKEND + '/api/v1/auto_info/get_models?year=' + selYear + '&make=' + selMake)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        setModels(data.models)
                    })
            } else if (selMake && selModel && options.length < 1) {
                fetch(props.BACKEND + '/api/v1/auto_info/get_options?year=' + selYear + '&make=' + selMake + '&model=' + selModel)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        setOptions(data.options)
                    })
            }
        }
    })

    return (
        <div className='container min-h-screen mx-auto flex flex-col'>
            <form className='flex flex-row justify-center'>
                <div className='p-2 px-10 w-1/2 lg:w-1/3'>
                    <Select id='selYear' label='Select Year' className='py-2' onChange={handleChangeAndSelection}>
                        <Select.Option>Year</Select.Option>
                        {
                            years.map((year) => {
                                return (<Select.Option>{year}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selMake' label='Select Make' className='py-2' onChange={handleChangeAndSelection}>
                        <Select.Option>Make</Select.Option>
                        {
                            makes.map((make) => {
                                return (<Select.Option>{make}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selModel' label='Select Model' className='py-2' onChange={handleChangeAndSelection}>
                        <Select.Option>Model</Select.Option>
                        {
                            models.map((model) => {
                                return (<Select.Option>{model}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selOption' label='Select Option' className='py-2' onChange={handleChangeAndSelection}>
                        <Select.Option>Option</Select.Option>
                        {
                            options.map((option) => {
                                return (<Select.Option>{option.option}</Select.Option>)
                            })
                        }
                    </Select>
                </div>
                <div className='p-2 px-10 w-1/2 lg:w-1/3'>
                    <Input onChange={handleMileage} label='Mileage' id='mileage' className='py-2' />
                    <Input onChange={handleLocatoin} label='Zipcode Location' id='zipLocation' className='py-2' />
                    <Input onChange={handleVin} label='VIN' id='mileage' className='py-2' />
                    <Input onChange={handlePrice} label='Listing price' id='price' className='py-2' />
                    <Select onChange={handleLien} label='Does the vehicle have a lien?' id='lien' className='py-2'>
                        <Select.Option value={null}>Lien</Select.Option>
                        <Select.Option value={true}>Yes</Select.Option>
                        <Select.Option value={false}>No</Select.Option>
                    </Select>
                </div>
            </form >
            <div className='mx-auto'>
                <Button onClick={formSubmit}>Submit</Button>
            </div>
        </div>
    )
}