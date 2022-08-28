import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import {data} from "./travelData"


export default function App() {

    const cards = data.map(card => {
        return (
            <Card 
                key={card.id}
                {...card}
            />
        )
    });

    return (
        <div>
            <Header />
            <section className="cards--list">
                {cards}   
            </section>
            <Footer />
        </div>
    );
}

