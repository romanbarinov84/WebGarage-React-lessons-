import { useState, useTransition } from 'react';
import HomeTab from './HomeTab';
import SlowAboutTab from './SlowAboutTab';
import ContactTab from './ContactTab';

const TabExample = () => {
    const [tab, setTab] = useState('home');
    const [isPending, startTransition] = useTransition();

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <div>
            <h1
                style={{
                    color: 'cornflowerblue',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
            >
                TabExample
            </h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                onClick={() => selectTab("home")}
                    style={{
                        border: '2px solid gray',
                        padding: '3px',
                        borderRadius: '6px',
                        background: 'green',
                        color: 'white',
                        boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    HomeTab
                </button>
                <button
                onClick={() => selectTab("about")}
                    style={{
                        border: '2px solid gray',
                        padding: '3px',
                        borderRadius: '6px',
                        background: 'orange',
                        color: 'white',
                        boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    About Us
                </button>
                <button
                onClick={() => selectTab("contact")}
                    style={{
                        border: '2px solid gray',
                        padding: '3px',
                        borderRadius: '6px',
                        background: 'lightblue',
                        color: 'white',
                        boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    Contacts
                </button>
            </div>
            <div style={{margin:"30px"}}>
               <hr />  
            </div>
           
            {isPending ? (
                <div>Загрузка вкладки ...</div>
            ):(
                <div>
                    {tab === "home" && <HomeTab/>}
                    {tab === "about" && <SlowAboutTab/>}
                    {tab === "contact" && <ContactTab/>}
                </div>
            )}
        </div>
    );
};

export default TabExample;
