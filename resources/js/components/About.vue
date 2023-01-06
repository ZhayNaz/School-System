<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Creator and Developers</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <h3>Garcia, Joseph Jeremy C.</h3><h4>System Creator and Developer</h4>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Version {{version}}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-card dark>
                    <v-card dark>
                        <v-btn
                            absolute
                            bottom
                            color="pink"
                            right
                            fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-img
                            gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                            >
                            <v-container class="fill-height">
                                <v-row align="center">
                                    <strong class="text-h1 font-weight-regular mr-6">8</strong>
                                    <v-row justify="end">
                                        <div class="text-h5 font-weight-light">
                                            Monday 
                                        </div>
                                        <div class="text-uppercase font-weight-light">
                                            | December 2022
                                        </div>
                                    </v-row>
                                </v-row>
                            </v-container>
                        </v-img>
                    </v-card>
                    <v-card-text class="py-0">
                        <v-timeline
                            align-top
                            dense>
                            <v-timeline-item
                                color="pink"
                                small>
                                <v-row class="pt-1">
                                    <v-col cols="3">
                                        <strong>5pm</strong>
                                    </v-col>
                                    <v-col>
                                        <strong>New Icon</strong>
                                        <div class="text-caption">
                                            Mobile App
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                
                            <v-timeline-item
                                color="teal lighten-3"
                                small>
                                <v-row class="pt-1">
                                    <v-col cols="3">
                                        <strong>3-4pm</strong>
                                    </v-col>
                                    <v-col>
                                        <strong>Design Stand Up</strong>
                                        <div class="text-caption mb-2">
                                            Hangouts
                                        </div>
                                        <v-avatar>
                                            <v-img
                                                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                            />
                                        </v-avatar>
                                        <v-avatar>
                                            <v-img
                                                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                                            />
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                
                            <v-timeline-item
                                color="pink"
                                small>
                                <v-row class="pt-1">
                                    <v-col cols="3">
                                        <strong>12pm</strong>
                                    </v-col>
                                    <v-col>
                                        <strong>Lunch break</strong>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                
                            <v-timeline-item
                                color="teal lighten-3"
                                small>
                                <v-row class="pt-1">
                                    <v-col cols="3">
                                        <strong>9-11am</strong>
                                    </v-col>
                                    <v-col>
                                        <strong>Finish Home Screen</strong>
                                        <div class="text-caption">
                                            Web App
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </template>

<script>
export default {
    data:()=>({
        version:'1.0.0'
    }),
}
</script>