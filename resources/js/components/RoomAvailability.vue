<template>
    <v-card>
        <v-card-title style="background-color:#d2rw2">Room Checker</v-card-title>
        <v-card-text>
            <h1>Main Building</h1>
            <v-row>
                <v-col>Room S101<br>
                    <v-btn color="primary"
                        v-if="S101 == true" 
                        @click="S101 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S101 == false" 
                        @click="S101 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room S102<br>
                    <v-btn color="primary"
                        v-if="S102 == true" 
                        @click="S102 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S102 == false" 
                        @click="S102 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room S103<br>
                    <v-btn color="primary"
                        v-if="S103 == true" 
                        @click="S103 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S103 == false" 
                        @click="S103 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room S104<br>
                    <v-btn color="primary"
                        v-if="S104 == true" 
                        @click="S104 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S104 == false" 
                        @click="S104 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room S105<br>
                    <v-btn color="primary"
                        v-if="S105 == true" 
                        @click="S105 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S105 == false" 
                        @click="S105 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room S106<br>
                    <v-btn color="primary"
                        v-if="S106 == true" 
                        @click="S106 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="S106 == false"
                        @click="S106 = true"
                        >Inuse
                    </v-btn>
                </v-col>
            </v-row><br>
            <h1>Annex A</h1>
            <v-row>
                <v-col>Room A101<br>
                    <v-btn color="primary"
                        v-if="A101 == true" 
                        @click="A101 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A101 == false" 
                        @click="A101 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room A102<br>
                    <v-btn color="primary"
                        v-if="A102 == true" 
                        @click="A102 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A102 == false" 
                        @click="A102 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room A103<br>
                    <v-btn color="primary"
                        v-if="A103 == true" 
                        @click="A103 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A103 == false" 
                        @click="A103 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room A104<br>
                    <v-btn color="primary"
                        v-if="A104 == true" 
                        @click="A104 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A104 == false" 
                        @click="A104 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room A105<br>
                    <v-btn color="primary"
                        v-if="A105 == true" 
                        @click="A105 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A105 == false" 
                        @click="A105 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room A106<br>
                    <v-btn color="primary"
                        v-if="A106 == true" 
                        @click="A106 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="A106 == false"
                        @click="A106 = true"
                        >Inuse
                    </v-btn>
                </v-col>
            </v-row><br>
            <h1>Annex B</h1>
            <v-row>
                <v-col>Room B101<br>
                    <v-btn color="primary"
                        v-if="B101 == true" 
                        @click="B101 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B101 == false" 
                        @click="B101 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room B102<br>
                    <v-btn color="primary"
                        v-if="B102 == true" 
                        @click="B102 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B102 == false" 
                        @click="B102 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room B103<br>
                    <v-btn color="primary"
                        v-if="B103 == true" 
                        @click="B103 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B103 == false" 
                        @click="B103 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room B104<br>
                    <v-btn color="primary"
                        v-if="B104 == true" 
                        @click="B104 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B104 == false" 
                        @click="B104 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room B105<br>
                    <v-btn color="primary"
                        v-if="B105 == true" 
                        @click="B105 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B105 == false" 
                        @click="B105 = true"
                        >Inuse
                    </v-btn>
                </v-col>
                <v-col>Room B106<br>
                    <v-btn color="primary"
                        v-if="B106 == true" 
                        @click="B106 = false"
                        >Available
                    </v-btn>
                    <v-btn color="error" 
                        v-else-if="B106 == false"
                        @click="B106 = true"
                        >Inuse
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data:()=>({
        A101: true, A102: true, A103: true, A104: true, A105: true, A106: true,
        B101: true, B102: true, B103: true, B104: true, B105: true, B106: true,
        S101: true, S102: true, S103: true, S104: true, S105: true, S106: true,
    })
}
</script>