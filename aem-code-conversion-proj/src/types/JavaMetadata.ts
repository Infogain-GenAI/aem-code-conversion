export interface JavaMetadata  {
    fileName: string;
    packageName: string;
    imports: string[];
    classes: JavaClassMetadata[];
    javaMethods: JavaMethodMetadata[];
    ast: string;
}

export interface JavaClassMetadata {
    className: string;
    modifiers: string[];
    superclass?: string;
    interfaces: string[];
    annotations: string[];
    fields: JavaFieldMetadata[];
    methods: JavaMethodMetadata[];
    constructors: JavaConstructorMetadata[];
}

export interface JavaFieldMetadata {
    fieldName: string;
    modifiers: string[];
    fieldType: string;
    annotations: string[];
}

export interface JavaMethodMetadata {
    methodName: string;
    modifiers: string[];
    returnType: string;
    parameters: JavaParameterMetadata[];
    annotations: string[];
    start: number;
    end: number;
}

export interface JavaConstructorMetadata {
    constructorName: string;
    modifiers: string[];
    parameters: JavaParameterMetadata[];
    annotations: string[];
}

export interface JavaParameterMetadata {
    parameterName: string;
    parameterType: string;
}