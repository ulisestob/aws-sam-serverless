import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import moment from 'moment';
import { Chance } from 'chance';

import { errorResponse, successResponse } from './reponses.util';

const chance = new Chance()

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return successResponse({
            message: 'generate pdf',
            sentence: chance.sentence(),
            time: moment().format('YYYY-MM-DD AA'),
            timestamp: new Date().getTime(),
        })
    } catch (err: any) {
        console.log(err);
        return errorResponse({
            message: err instanceof Error ? err.message : 'some error happened'
        })
    }
};
