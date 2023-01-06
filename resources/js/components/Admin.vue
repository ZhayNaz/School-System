<template>
    <v-card>
        <v-card-title>
            <b v-if="status == true" class="text-center">Adding of Employee</b>
            <b v-else-if="status == false" class="text-center">Adding of Students</b>
            <v-spacer/>
            <v-btn
                color="primary"
                v-if="status == true" 
                @click="status = false"
                >Students
            </v-btn>
            <v-btn color="error" 
                v-else-if="status == false" 
                @click="status = true"
                >Employees
            </v-btn>
        </v-card-title>
        <v-card-text>
            <v-row v-if="status == true">
                <v-col cols="4">
                    <v-card height="100%">
                        <v-card-text>
                            <v-text-field maxlength="6" outlined dense label="Employee Code"></v-text-field>
                            <v-text-field outlined dense label="Employee Name"></v-text-field>
                            <v-text-field type="tel" outlined dense label="Age"></v-text-field>
                            <v-text-field outlined dense label="Address"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block dense color="primary">
                                <v-icon>mdi-content-save</v-icon>SAVE
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="8">
                    <v-data-table>
                    </v-data-table>
                </v-col>
            </v-row>
            <v-row v-else-if="status == false">
                <v-col cols="4">
                    <v-card height="100%">
                        <v-card-text>
                            <v-text-field maxlength="6" outlined dense label="Student Code"></v-text-field>
                            <v-text-field outlined dense label="Student Name"></v-text-field>
                            <v-text-field type="tel" outlined dense label="Age"></v-text-field>
                            <v-text-field outlined dense label="Address"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block dense color="primary">
                                <v-icon>mdi-content-save</v-icon>SAVE
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="8">
                    <v-data-table>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-card-text>

    </v-card>
  </template>
  <script>
  export default {
    data: () => ({
        status: true,
        listOfEmployees:[
            { employeeCode: "34499", employeeName: "Marc", age: "22", address: "Tanza" },
            { employeeCode: "40287", employeeName: "Lloyd", age: "22", address: "Cavite City" },
            { employeeCode: "40226", employeeName: "Lito", age: "22", address: "Kawit" },
        ]
    }),
    methods:{
        statusStudents(){
            this.status = false
            console.log(this.status);
        },
        statusEmployees(){
            this.status = false
        }
    }
  };
  </script>