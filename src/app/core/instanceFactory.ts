export class InstanceFactory {
    
        public static getInstance<T>(obj: { new (): T; }): T {
            try {
                return new obj();
            } catch (ex) {
                throw new Error('getInstance error: İligli nesnenin bir örneği oluşturulamadı. Error Detail:' + ex.message);
            }
        }
    };
    