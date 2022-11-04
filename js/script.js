const { createApp } = Vue

createApp({
    data() {
        return {
            myMessage: '',
            currentChat: 0,
            search: '',
            modale: null,
            currentMessage: '',
            currentId: 0,
            activIndex: 0,
            msgOpt: {
                index: null,
                show: false
            },

            contacts: [
                {
                    name: 'Michele',
                    id: 0,
                    image: '../img/avatar_1.jpg',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    id: 1,
                    image: '../img/avatar_2.jpg',

                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    id: 2,
                    image: '../img/avatar_3.jpg',

                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    id: 3,
                    image: '../img/avatar_4.jpg',

                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    id: 4,
                    avatar: '_5',
                    image: '../img/avatar_5.jpg',

                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    id: 5,
                    avatar: '_6',
                    image: '../img/avatar_6.jpg',

                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    id: 6,
                    avatar: '_7',
                    image: '../img/avatar_7.jpg',

                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    id: 7,
                    avatar: '_8',
                    image: '../img/avatar_8.jpg',

                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            risposteRandomiche: [
                'Non sono convinto', 'Sei forte', 'Che ne so?', 'Si ma stai calmo!', 'Brindo alla tua!',
                'Ma chi sei?', 'Buongiorno', 'Raccontami', ':)', 'Non ho voglia di parlare con te oggi', 'ti sei fatto la doccia?'
            ],

        }
    },
    methods: {
        getChat(id) {
            this.currentChat = this.contacts.findIndex((item) => {
                return item.id === id
            })
            console.log(id)
        },
        sendMessage() {

            const d = new Date();
            let newd = d.toLocaleDateString();
            const newSendMessage = {
                date: newd,
                message: this.myMessage,
                status: 'sent'
            }
            this.contacts[this.currentChat].messages.push(newSendMessage)
            this.myMessage = '';
            setTimeout(() => {
                let rispostaRandom = Math.floor(Math.random() * this.risposteRandomiche.length);
                const d = new Date();
                let newd = d.toLocaleDateString();
                const newSendMessage = {
                    date: newd,
                    message: this.risposteRandomiche[rispostaRandom],
                    status: 'received'
                }
                this.contacts[this.currentChat].messages.push(newSendMessage)
            }, 1000);
        },
        lastMessage(item) {
            const msg = item.messages.filter((message) => {
                return message.status === 'received';
            })
            console.log(msg)
            return msg[msg.length - 1];
        },

        showMessageMenu(i) {

            if (this.currentMessage !== i) {
                this.currentMessage = i;
            } else {
                this.currentMessage = '';
            }

        },
        removeMsg(i) {
            this.contacts[this.activIndex].messages.splice(i, 1);

        },
        showOption(i) {
            if (i === this.msgOpt.index && this.msgOpt.show) {
                this.msgOpt.index = null;
                this.msgOpt.show = false;
            } else {
                this.msgOpt.index = i;
                this.msgOpt.show = true;
            }
        }






    },
    computed: {
        filtroContatti() {
            return this.contacts.filter((item) => {
                const name = item.name.toLowerCase();
                return name.includes(this.search.toLowerCase());
            })
        },

    },
}).mount('#app')