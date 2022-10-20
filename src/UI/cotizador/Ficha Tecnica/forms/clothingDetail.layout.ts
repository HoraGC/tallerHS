import { OrderCreationData } from "@backend/schemas/OrderCreationSchema";
import { LayoutElement } from "../../../Forms/types";

export const clothingDetailLayout: LayoutElement<OrderCreationData> = {
    type: 'Horizontal',
    elements: [

        //Logo Marca
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            elements: [
                {
                    type: 'Switch',
                    scope: 'logoMarca.selected',
                    label: "Logo Marca",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: 12
                },
                {
                    type: 'Uploader',
                    scope: 'files',
                    width: 12,
                    rules: [
                        { type: 'required', scope: 'logoMarca.selected' }
                    ],
                    options: {
                        fileSection: 'logoMarca.files',
                        multifile: true
                    }
                },
                {
                    type: 'Input',
                    scope: 'logoMarca.observaciones',
                    label: 'Observaciones',
                    options: {
                        multiline: 3
                    },
                    className: 'mr-4 mt-2 ml-2 md:ml-2 md:mr-6 md:mt-4',
                    width: 12,
                    rules: [
                        { type: 'required', scope: 'logoMarca.selected' }
                    ]
                },
            ]
        },

        //Bolsillos
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            spacing: 4,
            className: 'mt-1 mr-4 ',
            elements: [
                {
                    type: 'Switch',
                    scope: 'atributosPrenda.bolsillos.selected',
                    label: "Bolsillos",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: {
                        xs: 12,
                        sm: 6,
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.bolsillos.cantidad',
                    label: 'Cantidad',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.bolsillos.selected' }
                    ],
                    options: {
                        numeric: true
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.bolsillos.observaciones',
                    label: 'Observaciones',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.bolsillos.selected' }
                    ]
                },
            ]
        },

        //Elastico
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            spacing: 4,
            className: 'mt-1 mr-4',
            elements: [
                {
                    type: 'Switch',
                    scope: 'atributosPrenda.elastico.selected',
                    label: "Elástico",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: {
                        xs: 12,
                        sm: 6,
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.elastico.cantidad',
                    label: 'Cantidad',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.elastico.selected' }
                    ],
                    options: {
                        numeric: true
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.elastico.observaciones',
                    label: 'Observaciones',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.elastico.selected' }
                    ]
                },
            ]
        },

        //Botones
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            spacing: 4,
            className: 'mt-1 mr-4',
            elements: [
                {
                    type: 'Switch',
                    scope: 'atributosPrenda.botones.selected',
                    label: "Botones",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: {
                        xs: 12,
                        sm: 6
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.botones.cantidad',
                    label: 'Cantidad',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.botones.selected' }
                    ],
                    options: {
                        numeric: true
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.botones.observaciones',
                    label: 'Observaciones',
                    width: {
                        xs: 6,
                        sm: 3
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.botones.selected' }
                    ]
                },
            ]
        },

        //Cierre
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            spacing: 4,
            className: 'mt-1 mr-4',
            elements: [
                {
                    type: 'Switch',
                    scope: 'atributosPrenda.cierre.selected',
                    label: "Cierre",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: {
                        xs: 12,
                        sm: 6
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.cierre.observaciones',
                    label: 'Observaciones',
                    width: {
                        xs: 12,
                        sm: 6
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.cierre.selected' }
                    ]
                },
            ]
        },

        //Manga
        {
            type: 'Horizontal',
            justifyContent: 'center',
            width: 12,
            spacing: 4,
            className: 'mt-1 mr-4',
            elements: [
                {
                    type: 'Switch',
                    scope: 'atributosPrenda.manga.selected',
                    label: "Manga",
                    options: {
                        labelPlacement: 'end'
                    },
                    width: {
                        xs: 12,
                        sm: 6
                    }
                },
                {
                    type: 'Input',
                    scope: 'atributosPrenda.manga.observaciones',
                    label: 'Observaciones',
                    width: {
                        xs: 12,
                        sm: 6
                    },
                    rules: [
                        { type: 'required', scope: 'atributosPrenda.manga.selected' }
                    ]
                },
            ]
        }
    ]
}