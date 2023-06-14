import TopBar from "../components/TopBar"

export default function invalid() {
    return (
        <>
            <div className="h-screen bg-customBGInvalid bg-no-repeat bg-cover bg-center absolute w-screen">
                <TopBar/>
            </div>
        </>
      )
}