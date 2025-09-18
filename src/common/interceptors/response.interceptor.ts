import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const raw =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const message = this.normalizeMessage(raw);

    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message, // <-- ahora es string plano
    });
  }

  private normalizeMessage(raw: unknown): string {
    // Si viene como string, úsalo tal cual
    if (typeof raw === 'string') return raw;

    // Si viene como objeto (caso típico de HttpException)
    if (raw && typeof raw === 'object') {
      const r = raw as any;

      // class-validator puede traer message como array
      if (Array.isArray(r.message)) return r.message.join('; ');

      if (typeof r.message === 'string') return r.message;

      // fallback: intenta usar "error"
      if (typeof r.error === 'string') return r.error;
    }

    // fallback final
    return 'Internal server error';
  }
}
