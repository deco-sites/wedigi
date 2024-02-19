import { h, Component, ComponentChild } from 'preact';
// import { createLead } from "$store/actions/sharpspring/sharpspring.ts"


const accountId = "0F6C0D110F9650117A749D354C576F84"
const secretkey = "236E26A8C039E2B55E7A52456226505C"

const SHARPSPRING_API_BASE_URL = `https://api.sharpspring.com/pubapi/v1.2?accountID=${accountId}&secretKey=${secretkey}`;

interface Field {
    name: string;
    type: "text" | "select" | "radio";
    placeHolder: string;
}

export interface Props {
    fields: Field[];
}

interface State {
    currentStep: number;
    formData: SharpSpringFormData;
}

interface SharpSpringFormData {
    method: string;
    params: {
        objects: { [key: string]: string }[];
    };
    id: string;
}

interface ChangeEvent<T = Element> extends Event {
    target: EventTarget & T;
}

class MultiStepForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentStep: 0,
            formData: this.initializeFormData(props.fields),
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    initializeFormData(fields: Field[]): SharpSpringFormData {
        return {
            method: "createLeads",
            params: {
                objects: fields.map(field => {
                    return { [field.name]: '' };
                })
            },
            id: "1234"
        };
    }
    
    

    handleInputChange(fieldName: string, value: string) {
        this.setState((prevState) => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                params: {
                    ...prevState.formData.params,
                    objects: [
                        ...prevState.formData.params.objects,
                        { [fieldName]: value },
                    ],
                },
            },
        }));
    }
    

    handleSubmit() {
        const { currentStep, formData } = this.state;
        const { fields } = this.props;
        const currentStepFields = fields[currentStep];
        const isStepComplete = currentStepFields.every(field => formData[field.name]);
        
        if (currentStep < fields.length - 1) {
            this.setState({ currentStep: currentStep + 1 });
        }
    }
    
    async handleSubmitForm() {
        try {
            const response = await fetch(`/proxy?url=${SHARPSPRING_API_BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.formData),
            });
    
            if (!response.ok) {
                throw new Error('Erro ao criar lead no SharpSpring');
            }
    
            // Se a resposta for bem-sucedida, você pode querer atualizar o estado ou fazer outras ações
            // Por exemplo:
            // this.setState({ success: true });
        } catch (error) {
            console.error("Erro ao criar lead no SharpSpring:", error);
        }
    }    
    

    render(): ComponentChild {
        const { fields } = this.props;
        const { currentStep, formData } = this.state;
        const currentStepFields = fields[currentStep];

        return (
            <div>
                <div class="flex bg-white rounded-md gap-3 pl-3">
                    {
                        currentStepFields?.map(field => (
                        <div key={field.name} class="relative grid w-[400px]">
                            {field.type === "select" ? (
                                <select
                                    class="row-start-1 col-start-1 appearance-none b-0 dark:bg-slate-800 outline-none font-bold text-primary text-sm"
                                    id={field.name}
                                    value={formData[field.name]}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        this.handleInputChange(field.name, e.target.value);
                                    }}
                                >
                                    <option>{field.placeHolder}</option>
                                    {
                                        field?.options.map((option: string) => (
                                            <option value={option}>{option}</option>
                                        ))
                                    }
                                </select>
                            ) : (
                                <input
                                    class="b-0 appearance-none outline-none"
                                    type={field.type}
                                    id={field.name}
                                    value={formData[field.name]}
                                    placeholder={field.placeHolder}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        this.handleInputChange(field.name, e.target.value);
                                    }}
                                />
                            )}
                            {
                                field.type == "select" &&
                                    <svg class="absolute top-[12px] right-0 pointer-events-none row-start-1 col-start-1" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9.5L12 15.5L18 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>                                
                            }
                        </div>
                    ))}
                    {
                        currentStep == fields.length - 1 ?
                            <button class="bg-accent text-white rounded-md font-bold py-3 px-6" onClick={() => this.handleSubmitForm()}>Enviar</button>
                        :
                            <button class="bg-accent text-white rounded-md font-bold py-3 px-6" onClick={() => this.handleSubmit()}>Avançar</button>
                    }
                </div>
                <span class="flex justify-center text-secondary text-xs uppercase pt-2">Pergunta {currentStep + 1} de {fields.length}</span>
            </div>
        );
    }
}

export default MultiStepForm;
