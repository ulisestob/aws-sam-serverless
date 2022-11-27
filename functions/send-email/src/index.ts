import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Chance } from 'chance';

import { errorResponse, successResponse } from './reponses.util';

const chance = new Chance()

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return successResponse({
            message: 'send email',
            email: chance.email(),
            timestamp: new Date().getTime(),
        })
    } catch (err: any) {
        console.log(err);
        return errorResponse({
            message: err instanceof Error ? err.message : 'some error happened'
        })
    }
};
