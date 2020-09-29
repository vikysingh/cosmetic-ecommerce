//Importing the actual reducer
import { filterReducer } from "../../../redux/reducers"

//Importing initial state
import initialState from "../../../redux/reducers/initialState"

//Importing action generators
import { setBrand, setProduct, setMinPrice, setMaxPrice, removeBrand, removeProduct,
    removeMinPrice,removeMaxPrice
} from "../../../redux/actions/filters/filterActionGenerators"

//Importing dummy filter data
import { dummyFilterData } from "../../../test_files/dummyTestData"

const { brand, product, minPrice, maxPrice } = dummyFilterData

test('Filter reducer case: SET_RBAND', () => {
    expect(filterReducer(initialState.filters, setBrand(brand))).toMatchObject({
        ...initialState.filters,
        brand
    })
})

test('Filter reducer case: SET_PRODUCT', () => {
    expect(filterReducer(initialState.filters, setProduct(product)))
    .toMatchObject({
        ...initialState.filters,
        product,
    })
})

test('Filter reducer case: SET_MIN_PRICE', () => {
    expect(filterReducer(initialState.filters, setMinPrice(minPrice))).toMatchObject({
        ...initialState.filters,
        minPrice: 20.00
    })
})

test('Filter reducer case: SET_MAX_PRICE', () => {
    expect(filterReducer(initialState.filters, setMaxPrice(maxPrice))).toMatchObject({
        ...initialState.filters,
        maxPrice: 50.00
    })
})

test('Filter reducer case: REMOVE_BRAND', () => {
    expect(filterReducer(initialState.filters, removeBrand())).toMatchObject({
        ...initialState.filters,
        brand: ''
    })
})

test('Filter reducer case: REMOVE_PRODUCT', () => {
    expect(filterReducer(initialState.filters, removeProduct())).toMatchObject({
        ...initialState.filters,
        product: '',
    })
})

test('Filter reducer case: REMOVE_MIN_PRICE', () => {
    expect(filterReducer(initialState.filters, removeMinPrice())).toMatchObject({
        ...initialState.filters,
        minPrice: 0,
    })
})

test('Filter reducer case: REMOVE_PRODUCT', () => {
    expect(filterReducer(initialState.filters, removeMaxPrice())).toMatchObject({
        ...initialState.filters,
        maxPrice: 100.00
    })
})