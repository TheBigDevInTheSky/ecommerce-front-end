import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ExamplePage, HomePage, Navbar } from './components'

const queryClient = new QueryClient()

const App: React.FunctionComponent = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/examplePage" element={<ExamplePage />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    )
}

export default App
