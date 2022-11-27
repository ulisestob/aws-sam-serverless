import { APIGatewayProxyResult } from 'aws-lambda';

export const successResponse = (data: Record<string, any>): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export const errorResponse = (data: Record<string, any>): APIGatewayProxyResult => {
  return {
    statusCode: 500,
    body: JSON.stringify(data),
  }
}