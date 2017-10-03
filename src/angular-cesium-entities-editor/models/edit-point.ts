import { AcEntity } from '../../angular-cesium/models/ac-entity';
import { EditPolyline } from './edit-polyline';
import { Cartesian3 } from '../../angular-cesium/models/cartesian3';

export class EditPoint extends AcEntity {
  static counter = 0;
  private id: string;
  private startingPolyline: EditPolyline;
  private endingPolyline: EditPolyline;
  private editedEntityId: string;
  private position: any;
  private active: boolean;

  constructor(entityId: string, position, isActive = true) {
    super();
    this.editedEntityId = entityId;
    this.position = position;
    this.id = this.generateId();
    this.active = isActive;
  }

  setIsActive(isActive: boolean) {
    this.active = isActive;
  }

  isActive(): boolean {
    return this.active;
  }

  getEditedEntityId(): string {
    return this.editedEntityId;
  }

  getPosition(): Cartesian3 {
    return this.position;
  }

  setPosition(position: Cartesian3) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.position.z = position.z;
  }

  setStartingPolyline(polyline: EditPolyline) {
    this.startingPolyline = polyline;
  }

  setEndingPolyline(polyline: EditPolyline) {
    this.endingPolyline = polyline;
  }

  getStartingPolyline(): EditPolyline {
    return this.startingPolyline;
  }

  getEndingPolyline(): EditPolyline {
    return this.endingPolyline;
  }

  getId(): string {
    return this.id;
  }

  private generateId(): string {
    return 'edit-point-' + EditPoint.counter++;
  }
}